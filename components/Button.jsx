import Link from "next/link";
import "./Buttton.css";

const Button = () => {
  const handleCMTSubmission = () => {
    // Replace with your actual CMT URL
    window.open('https://cmt3.research.microsoft.com/IICTDS2025', '_blank');
  };

  const handleTemplateDownload = async () => {
  try {
    const response = await fetch('/data/acknowledgement-template.zip');
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'acknowledgement-template.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Download failed:', error);
    alert('Download failed. Please try again.');
  }
};

  const buttonStyles = {
    container: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '20px'
    },
    baseButton: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '15px 25px',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      minWidth: '220px',
      position: 'relative',
      overflow: 'hidden',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    },
    blueButton: {
      background: `linear-gradient(135deg, #091B8F, #061566)`,
      boxShadow: '0 4px 15px rgba(9, 27, 143, 0.3)'
    },
    redButton: {
      background: 'linear-gradient(135deg, red, #d60606ff)',
      boxShadow: '0 4px 15px rgba(255, 0, 0, 0.3)'
    },
    buttonIcon: {
      marginRight: '10px',
      fontSize: '18px'
    }
  };

  const handleMouseEnter = (e, isBlue = false) => {
    if (isBlue) {
      e.target.style.background = 'linear-gradient(135deg, #0A1E9E, #091B8F)';
      e.target.style.boxShadow = '0 6px 20px rgba(9, 27, 143, 0.4)';
    } else {
      e.target.style.background = 'linear-gradient(135deg, #FF1A1A, red)';
      e.target.style.boxShadow = '0 6px 20px rgba(255, 0, 0, 0.4)';
    }
    e.target.style.transform = 'translateY(-2px)';
  };

  const handleMouseLeave = (e, isBlue = false) => {
    if (isBlue) {
      e.target.style.background = 'linear-gradient(135deg, #091B8F, #061566)';
      e.target.style.boxShadow = '0 4px 15px rgba(9, 27, 143, 0.3)';
    } else {
      e.target.style.background = 'linear-gradient(135deg, red, #CC0000)';
      e.target.style.boxShadow = '0 4px 15px rgba(255, 0, 0, 0.3)';
    }
    e.target.style.transform = 'translateY(0px)';
  };

  return (
    <div style={buttonStyles.container}>
      {/* CMT Submission Button (Blue) */}
      <button
        style={{
          ...buttonStyles.baseButton,
          ...buttonStyles.blueButton
        }}
        onClick={handleCMTSubmission}
        onMouseEnter={(e) => handleMouseEnter(e, true)}
        onMouseLeave={(e) => handleMouseLeave(e, true)}
      >
        <span style={buttonStyles.buttonIcon}>📝</span>
        CMT Submission
      </button>

      {/* Template Download Button (Red) */}
      <button
        style={{
          ...buttonStyles.baseButton,
          ...buttonStyles.redButton
        }}
        onClick={handleTemplateDownload}
        onMouseEnter={(e) => handleMouseEnter(e, false)}
        onMouseLeave={(e) => handleMouseLeave(e, false)}
      >
        <span style={buttonStyles.buttonIcon}>📄</span>
        Manuscript Template
      </button>
    </div>
  );
};

export default Button;