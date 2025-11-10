import { SyncLoader } from 'react-spinners';
const Loading = () => {
    return (
        <div className="flex items-center justify-center py-60">
            <SyncLoader color="#d00a0a" />
        </div>
    );
};

export default Loading;