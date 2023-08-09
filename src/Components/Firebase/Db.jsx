import "./Db.css";
import { db, storage } from "../../Config/firebaseConfig";
import { useState, useEffect } from "react";
import { getDocs, addDoc, deleteDoc, updateDoc, doc, collection } from "firebase/firestore";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";


export const Db = () => {
    const [movieList, setMovieList] = useState([]);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [newMovieTitle, setNewMovieTitle] = useState("");
    const [newReleaseDate, setNewReleaseDate] = useState();
    const [isNewMovieReceivedOscar, setIsNewMovieReceivedOscar] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [isMethodVisible, setIsMethodVisible] = useState(true);
    const [updatedTitle, setUpdatedTitle] = useState("");
    const [successTimeoutId, setSuccessTimeoutId] = useState(null);
    const [errorTimeoutId, setErrorTimeoutId] = useState(null);
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);

    const moviesCollectionRef = collection(db, "movies");
    const imageListRef = ref(storage, "projectFiles/");


    const getMovieList = async () => {
        try {
            setIsLoading(true);
            const data = await getDocs(moviesCollectionRef);
            const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setMovieList(filteredData);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getMovieList();
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])
                })
            })
        });
        return () => {
            // Clear the timeouts when the component unmounts
            clearTimeout(successTimeoutId);
            clearTimeout(errorTimeoutId);
        };
    }, []);

    const clearInputFields = () => {
        setNewMovieTitle("");
        setNewReleaseDate(0);
        setIsNewMovieReceivedOscar(true);
    };

    const onSubmitMovie = async () => {
        if (newMovieTitle.trim() === "" || newReleaseDate === 0) {
            setErrorMessage("Please fill in all fields."); // Display error message for empty input fields
            return;
        }
        try {
            setIsLoading(true);
            await addDoc(moviesCollectionRef, {
                title: newMovieTitle,
                releaseDate: newReleaseDate,
                receivedAnOscar: isNewMovieReceivedOscar
            });
            setSuccessMessage("Movie created successfully.");
            getMovieList();
            clearInputFields();
            setIsMethodVisible(false);
            setErrorMessage("");

            // Clear previous timeouts and set a new one for success message
            clearTimeout(successTimeoutId);
            const newSuccessTimeoutId = setTimeout(() => {
                setIsMethodVisible(true);
                setSuccessMessage(""); // Clear success message after 3 seconds
            }, 3000);
            setSuccessTimeoutId(newSuccessTimeoutId);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteMovie = async (id) => {
        try {
            const movieDoc = doc(db, "movies", id);
            await deleteDoc(movieDoc);
            setSuccessMessage("Movie deleted successfully.");
            getMovieList();
            setIsMethodVisible(false);
            setErrorMessage("");

            // Clear previous timeouts and set a new one for success message
            clearTimeout(successTimeoutId);
            const newSuccessTimeoutId = setTimeout(() => {
                setIsMethodVisible(true);
                setSuccessMessage(""); // Clear success message after 3 seconds
            }, 3000);
            setSuccessTimeoutId(newSuccessTimeoutId);
        } catch (error) {
            console.error(error);
        }
    };

    const updateMovieTitle = async (id) => {
        if (updatedTitle.trim() === "") {
            setErrorMessage("Please enter a new title."); // Display error message for empty updated title field
            return;
        }
        try {
            const movieDoc = doc(db, "movies", id);
            await updateDoc(movieDoc, { title: updatedTitle });
            setSuccessMessage("Title updated successfully.");
            getMovieList();
            setUpdatedTitle("");
            setErrorMessage("");

            // Clear previous timeouts and set a new one for success message
            clearTimeout(successTimeoutId);
            const newSuccessTimeoutId = setTimeout(() => {
                setIsMethodVisible(true);
                setSuccessMessage(""); // Clear success message after 3 seconds
            }, 3000);
            setSuccessTimeoutId(newSuccessTimeoutId);
        } catch (error) {
            console.error(error);
        }
    };

    const uploadImage = async () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `projectFiles/${imageUpload.name}`);
        try {
            await uploadBytes(imageRef, imageUpload).then((snapShot) => {
                getDownloadURL(snapShot.ref).then((url) => {
                    setImageList((prev) => [...prev, url]);
                });

            });
        } catch (error) {
            console.error(error);
        }
    };

    const renderImage = (movie, imageList) => {
        if (movie.imageUrl) {
            return (
                <img src={movie.imageUrl} />
            );
        } else {
            // Check if the imageList array has any images.
            if (imageList.length > 0) {
                // Return the first image in the imageList array.
                return (
                    <img src={imageList[0]} />
                );
            } else {
                // Return a null element.
                return null;
            }
        }
    };

    return (
        <div className="db-container">
            <div className="form-container">
                <input
                    type="text"
                    placeholder="Movie title..."
                    value={newMovieTitle}
                    onChange={(e) => {
                        setNewMovieTitle(e.target.value);
                        setErrorMessage("");
                    }}
                />
                <input
                    type="number"
                    placeholder="Release date..."
                    value={newReleaseDate}
                    onChange={(e) => {
                        setNewReleaseDate(Number(e.target.value));
                        setErrorMessage("");
                    }}
                />
                <label>Received an Oscar</label>
                <input
                    type="checkbox"
                    checked={isNewMovieReceivedOscar}
                    onChange={(e) => setIsNewMovieReceivedOscar(e.target.checked)}
                />
                <button onClick={onSubmitMovie} disabled={!isMethodVisible}>
                    Submit Movie
                </button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
            </div>

            {isLoading ? (
                <p className="loading">Loading...</p>
            ) : (
                movieList.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <div>
                            {renderImage(movie, imageList)}
                        </div>
                        <h1 style={{ color: movie.receivedAnOscar ? "green" : "red" }}>
                            {movie.title}
                        </h1>
                        <p>Date: {movie.releaseDate}</p>
                        <button onClick={() => deleteMovie(movie.id)} disabled={!isMethodVisible}>
                            Delete Movie
                        </button>
                        <input
                            placeholder="New title..."
                            value={updatedTitle}
                            onChange={(e) => {
                                setUpdatedTitle(e.target.value);
                                setErrorMessage("");
                            }}
                        />
                        <button onClick={() => updateMovieTitle(movie.id)}>Update Title</button>

                        <div className="upload-container">
                            <input type="file" onChange={(e) => setImageUpload(e.target.files[0])} />
                            <button onClick={uploadImage}>Upload Image</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};
