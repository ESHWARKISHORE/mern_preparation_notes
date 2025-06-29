'use client';

export default function Error({ error, reset }) {
    return (
        <div>
            <h2>Blog</h2>
            <p>Oops! {error.message}</p>
            <button onClick={() => reset()}>Try again</button>
        </div>
    );
}