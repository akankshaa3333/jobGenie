import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import '../styles/ForgotPassword.css';
import jobgenieBanner from '../assets/jobgenie-banner.png';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!email) {
            setError('Please enter your email address');
            return;
        }

        try {
            setLoading(true);
            setError(null);
            setMessage('');
            
            await sendPasswordResetEmail(auth, email);
            setMessage('Password reset email sent. Please check your inbox.');
        } catch (error) {
            console.error("Error sending reset email:", error);
            
            // User-friendly error messages
            if (error.code === 'auth/user-not-found') {
                setError('No user found with this email. Please sign up first.');
            } else if (error.code === 'auth/invalid-email') {
                setError('Please enter a valid email address');
            } else {
                setError(error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="forgot-password-container">
            <div className="forgot-password-box">
                <div className="forgot-password-left">
                    <img 
                        src={jobgenieBanner} 
                        alt="JobGenie Banner" 
                        className="banner-image"
                    />
                    <h2>Find Your Dream Job with JobGenie</h2>
                </div>

                <div className="forgot-password-right">
                    <h2>Forgot Password</h2>
                    <p>Enter your email address to receive a password reset link</p>
                    
                    {message && (
                        <div className="success-message">
                            {message}
                        </div>
                    )}
                    
                    {error && (
                        <div className="error-message">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleResetPassword}>
                        <div className="input-group">
                            <label htmlFor="email">Email ID</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your registered email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                autoComplete="email"
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="reset-button"
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send Reset Link'}
                        </button>
                    </form>

                    <div className="back-to-login">
                        Remember your password? <Link to="/signin">Login here</Link>
                    </div>

                    <div className="signup-link">
                        Don't have an account? <Link to="/signup">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
