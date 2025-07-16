const DownloadDatabase: React.FC = () => {
  return (
    <a href={`${import.meta.env.VITE_BASE_URL}brain-bank/download/database`} download>
      Download Database
    </a>
  );
};

export default DownloadDatabase;