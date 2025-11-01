// Load footer component
function loadFooter() {
    console.log('Loading footer...');
    const footerContainer = document.getElementById('footer-container');
    
    if (!footerContainer) {
        console.error('Footer container not found!');
        return;
    }

    // Embed footer HTML directly to avoid file:// protocol issues
    const footerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>InfinityBuilds</h3>
                    <p>Professional Minecraft Builder</p>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="./">Portfolio</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Connect</h4>
                    <div class="connect-links">
                        <p><span class="connect-label">Website:</span> <a href="https://infinitybuildsmc.com" class="connect-link">infinitybuildsmc.com</a></p>
                        <p><span class="connect-label">Instagram:</span> <a href="https://www.instagram.com/infinitybuildsmc/" class="connect-link" target="_blank">@infinitybuildsmc</a></p>
                        <p><span class="connect-label">X (Twitter):</span> <a href="https://x.com/infinityfrommc?s=21&t=3sl3gIy-MIMXhm4PLkgbcw" class="connect-link" target="_blank">@infinityfrommc</a></p>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 InfinityBuilds. All rights reserved.</p>
            </div>
        </div>
    </footer>`;

    footerContainer.innerHTML = footerHTML;
    console.log('Footer loaded successfully');
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { loadFooter };
}
