import http.server
import socketserver
import os

PORT = 3003
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class AdminHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        if self.path in ('/', '/index.html'):
            self.send_response(302)
            self.send_header('Location', '/admin.html')
            self.end_headers()
            return
        return super().do_GET()

if __name__ == '__main__':
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), AdminHandler) as httpd:
        print(f"KANDY WORLD Admin Server running on http://localhost:{PORT}")
        httpd.serve_forever()
