import React from 'react';

function App() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>🚀 AWS ECS 배포 성공!</h1>
            <p>Jenkins 파이프라인을 통해 정상적으로 배포되었습니다.</p>
            <p>Status: <span style={{ color: 'green', fontWeight: 'bold' }}>Healthy</span></p>
        </div>
    );
}

export default App;