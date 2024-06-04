import React from 'react';
import Chart from '../components/Chart';
import useFetchData from '../hook/useFetcjData';

const MelonPage = () => {
    const { data, loading } = useFetchData(`https://raw.githubusercontent.com/seodaewon1/music-best/main/melon/melon100_2024-06-04.json`)

    return (
        <>
            {loading ? (
                <div>
                    로딩...
                </div>
            ) : (
                <Chart title="🍈멜론 차트 100" musicList={data} />
            )}
        </>
    );

}

export default MelonPage;