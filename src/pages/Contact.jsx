import React from "react";
export default function Contact() {
    return (
        <div>
            <h1>Contact Me</h1>
            <form className="contact-form">
                <label htmlFor="first_name">Ton prénom:</label>
                <input type="text" id="first_name" name="first_name" required />
                <label htmlFor="last_name">Ton nom:</label>
                <input type="text" id="last_name" name="last_name" required />
                <label htmlFor="email">Ton email:</label>
                <input type="email" id="email" name="email" required />
                <textarea id="message" name="message" rows="5" placeholder="Ton message..." required></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}