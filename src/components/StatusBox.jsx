const StatusBox = (porps) => {
    const { title, value, textColor } = porps
    return (
        <>
            <div className="status-box">
                <p className="status-box-title">{title}</p>
                <p className="status-box-value" style={{ color: textColor }}>{value ? Number(value).toLocaleString() : 'Unknow'}</p>
            </div>

        </>
    );
}

export default StatusBox;