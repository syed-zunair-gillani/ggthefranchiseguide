import { Spinner } from "./ui/spinner"

export default function FallbackHome() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our Website</h1>
      <div className="space-y-4">
        <p className="text-xl mb-4">We're currently loading your content. Please wait a moment!</p>
        <div className="flex justify-center py-8">
          <Spinner />
        </div>
        <p>In the meantime, you can:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Explore our other pages</li>
          <li>Contact us for support</li>
          <li>Follow us on social media for updates</li>
        </ul>
      </div>
    </div>
  )
}

