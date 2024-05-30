import React from 'react';

function Layout({ children, ...props }) {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <header style={{ borderBottom: '1px solid #ddd' }}>My Custom Header</header>
      <main>{children}</main>
      <footer style={{ borderTop: '1px solid #ddd' }}>My Custom Footer</footer>
    </div>
  );
}

export default Layout;
