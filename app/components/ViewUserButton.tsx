"use client";

const ViewUserButton = () => {
    const handleClick = () => alert("TEST");

    return (
        <>
            <button onClick={handleClick}>
                Lihat User
            </button>
        </>
    )
}

export default ViewUserButton;