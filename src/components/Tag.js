function Tag({ tag, active, children, onClick }) {
  return (
    <span className={`hTag ${active ? 'active' : ''}`} onClick={() => onClick(tag)}>
      {children}
    </span>
  );
}
export default Tag;
