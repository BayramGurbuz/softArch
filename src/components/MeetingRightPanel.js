import React, { useState } from 'react';
import { FaFileAlt, FaHandPaper, FaComment, FaUsers } from 'react-icons/fa';
import '../ui/styles.css';

function MeetingRightPanel() {
  const [activeTab, setActiveTab] = useState('Transkript');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Transkript':
        return <div>Transkript içeriği</div>;
      case 'Gesture':
        return <div>Gesture içeriği</div>;
      case 'Chat':
        return <div>Chat içeriği</div>;
      case 'Persons':
        return <div>Persons içeriği</div>;
      default:
        return null;
    }
  };

  return (
    <div className="right-panel">
      <div className="right-panel-content">{renderTabContent()}</div>
      <div className="right-panel-tabs">
        <button
          className={activeTab === 'Transkript' ? 'active' : ''}
          onClick={() => setActiveTab('Transkript')}
          aria-label="Transkript"
        >
          <FaFileAlt />
        </button>
        <button
          className={activeTab === 'Gesture' ? 'active' : ''}
          onClick={() => setActiveTab('Gesture')}
          aria-label="Gesture"
        >
          <FaHandPaper />
        </button>
        <button
          className={activeTab === 'Chat' ? 'active' : ''}
          onClick={() => setActiveTab('Chat')}
          aria-label="Chat"
        >
          <FaComment />
        </button>
        <button
          className={activeTab === 'Persons' ? 'active' : ''}
          onClick={() => setActiveTab('Persons')}
          aria-label="Katılımcılar"
        >
          <FaUsers />
        </button>
      </div>
    </div>
  );
}

export default MeetingRightPanel;