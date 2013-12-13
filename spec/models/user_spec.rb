require 'spec_helper'

describe User do
  # this before section solved the problem
  before(:each) do
    it do
  FactoryGirl.create(:my_model)
  should validate_uniqueness_of(:whatever)
end
    User.create(
      username: "Bob",
      email: "bob@bob.com",
      password: "bob",
      password_confirmation: "bob"
    )
  end

  # it { should validate_presence_of(:email) }
  # it { should validate_presence_of(:username) }
  # it { should validate_presence_of(:password_digest) }
  # it { should validate_uniqueness_of(:email) }
end
