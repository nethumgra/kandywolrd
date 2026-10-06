import http.server
import socketserver
import os

PORT = 3002
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class StoreHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        clean_path = self.path.split('?')[0].rstrip('/')
        if clean_path:
            possible_file = os.path.join(DIRECTORY, clean_path.lstrip('/') + '.html')
            if os.path.isfile(possible_file):
                query = ('?' + self.path.split('?')[1]) if '?' in self.path else ''
                self.path = clean_path + '.html' + query
        return super().do_GET()

if __name__ == '__main__':
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), StoreHandler) as httpd:
        print(f"KANDY WORLD Store Server running on http://localhost:{PORT}")
        while True:
            try:
                httpd.serve_forever()
            except (ConnectionResetError, BrokenPipeError, ConnectionAbortedError):
                continue
            except KeyboardInterrupt:
                break
            except Exception:
                continue
