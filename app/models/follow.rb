# == Schema Information
#
# Table name: follows
#
#  id              :integer          not null, primary key
#  follower_id     :integer          not null
#  followable_id   :integer
#  followable_type :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Follow < ActiveRecord::Base
  belongs_to :followable, polymorphic: true

  belongs_to :follower,
    class_name: "User",
    foreign_key: :follower_id
end
