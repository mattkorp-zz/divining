class User < ActiveRecord::Base
  has_many :friendships
  has_many :friends, through: :friendships
  has_many :inverse_friendships, class_name: "Friendship", foreign_key: "friend_id"
  has_many :inverse_friends, through: :inverse_friendships, source: :user

  attr_accessor :password, :password_confirmation
  has_secure_password

  validates :email, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true
  validates :password, :presence => true, :confirmation => true
  validates :password_confirmation, :presence => true

  def password=(pass)
    return if pass.blank?
    @password = pass
    self.password_digest = BCrypt::Password.create(pass)
  end

end
