import React, { useState } from 'react';
import './ShareDialog.css';

const ShareDialog = ({ friends, onShareWithFriend, onClose }) => {
  const [selectedFriend, setSelectedFriend] = useState('');

  const handleShareClick = () => {
    if (selectedFriend) {
      onShareWithFriend(selectedFriend);
    }
  };

  return (
    <div className="share-dialog-overlay">
      <div className="share-dialog">
        <div className="share-dialog-header">
          <h3>Share Weather Schedule</h3>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="share-dialog-content">
          <p>Choose a friend to share your weather schedule with:</p>
          <select 
            value={selectedFriend} 
            onChange={(e) => setSelectedFriend(e.target.value)}
            className="friend-select"
          >
            <option value="">Select a friend</option>
            {friends.map((friend, index) => (
              <option key={index} value={friend}>{friend}</option>
            ))}
          </select>
          <div className="share-dialog-actions">
            <button 
              className="cancel-btn" 
              onClick={onClose}
            >
              Cancel
            </button>
            <button 
              className="share-btn" 
              onClick={handleShareClick}
              disabled={!selectedFriend}
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareDialog;