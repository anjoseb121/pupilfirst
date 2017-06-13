# Accepts a long URL and transforms that to a short URL
module Admin
  class ShortenUrlForm < Reform::Form
    property :url, validates: { presence: true, url: true }
    property :unique_key, validates: { length: { maximum: 250 }, format: { with: /\A[a-zA-Z0-9\-_]+\z/, message: 'contains invalid characters' }, allow_blank: true }
  end
end
