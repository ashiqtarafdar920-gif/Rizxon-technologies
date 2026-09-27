export default function Loader({ hidden = false }) {
  return (
    <div
      className={`boot-loader ${hidden ? 'boot-loader--hidden' : ''}`}
      role="status"
      aria-label="Loading"
      aria-hidden={hidden}
    >
      <span className="boot-loader__mark">RIZXON</span>
      <span className="boot-loader__bar">
        <span className="boot-loader__bar-fill" />
      </span>
    </div>
  );
}
