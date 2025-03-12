export default function Footer() {
  return (
    <footer className="py-20 mt-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="md:col-span-1">
            <h3 className="text-xs font-medium mb-6">CONNECT</h3>
          </div>

          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div className="space-y-3">
              <a href="https://linkedin.com" className="block hover:opacity-70 transition-opacity">
                Linkedin
              </a>
              <a href="https://instagram.com" className="block hover:opacity-70 transition-opacity">
                Instagram
              </a>
            </div>

            <div className="space-y-3">
              <p>hello@thirtysixstudio.com</p>
              <p>Amsterdam and worldwide</p>
            </div>

            <div className="space-y-3">
              <p>All Rights Reserved</p>
              <p>©2025, Thirtysixstudio</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="md:col-span-1"></div>
          <div className="md:col-span-3 flex flex-wrap gap-6 text-xs">
            <button className="text-xs underline hover:opacity-70 transition-opacity">PRIVACY STATEMENT ↓</button>
            <button className="text-xs underline hover:opacity-70 transition-opacity">BACK TO TOP</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1"></div>
          <div className="md:col-span-3">
            <p className="text-xs text-gray-500">
              Thirtysixstudio is registered with the Dutch Chamber of Commerce under registration number KVK 90310152.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

