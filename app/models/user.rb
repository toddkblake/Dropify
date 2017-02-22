# == Schema Information
#
# Table name: users
#
#  id                         :integer          not null, primary key
#  username                   :string           not null
#  email                      :string           not null
#  f_name                     :string           not null
#  l_name                     :string           not null
#  password_digest            :string           not null
#  session_token              :string           not null
#  created_at                 :datetime         not null
#  updated_at                 :datetime         not null
#  profile_photo_file_name    :string
#  profile_photo_content_type :string
#  profile_photo_file_size    :integer
#  profile_photo_updated_at   :datetime
#

class User < ActiveRecord::Base
  validates :username, :email, presence: true, uniqueness: true
  validates :f_name, :l_name, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token!

  has_attached_file :profile_photo,
    styles: { small: "50x50", medium: "130x130", large: "210x210" },
    default_url: -> (a) { ActionController::Base.helpers.asset_path("default-profile-photo.jpg") }
  validates_attachment_content_type :profile_photo, content_type: /\Aimage\/.*\Z/

  has_many :playlists,
    foreign_key: :owner_id

  attr_reader :password

  def self.find_by_credentials(credentials)
    user = User.find_by(username: credentials[:username])
    return nil unless user
    user.is_password?(credentials[:password]) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
    password
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token!
    self.session_token ||= User.generate_session_token
  end
end
