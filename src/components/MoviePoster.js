import React, { useState, useEffect } from 'react';

const MoviePoster = ({ tmdbId, title, fallback }) => {
  const [posterUrl, setPosterUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Use environment variable
  const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
  const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    const fetchPoster = async () => {
      try {
        const response = await fetch(
          `${TMDB_BASE_URL}/movie/${tmdbId}?api_key=${TMDB_API_KEY}`
        );
        const data = await response.json();

        if (data.poster_path) {
          setPosterUrl(`${TMDB_IMAGE_BASE}${data.poster_path}`);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Error fetching poster:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (tmdbId && TMDB_API_KEY) {
      fetchPoster();
    } else {
      setLoading(false);
      setError(true);
      if (!TMDB_API_KEY) {
        console.warn('TMDB API key not found in environment variables');
      }
    }
  }, [tmdbId, TMDB_API_KEY]);

  // Rest of component remains the same...
  if (loading) {
    return (
      <div className="film-poster loading">
        <div className="loading-spinner">📽️</div>
      </div>
    );
  }

  if (error || !posterUrl) {
    return <div className="film-poster">{fallback}</div>;
  }

  return (
    <div className="film-poster">
      <img
        src={posterUrl}
        alt={`${title} poster`}
        onError={() => setError(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '5px',
        }}
      />
    </div>
  );
};

export default MoviePoster;
