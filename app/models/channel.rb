# == Schema Information
#
# Table name: channels
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  server_id  :integer          not null
#
# Indexes
#
#  index_channels_on_server_id  (server_id)
#
class Channel < ApplicationRecord
  validates :name, :server_id, presence: true
  validates :name, uniqueness: {scope: :server_id}
  
  belongs_to :server 

  has_many :messages,
    foreign_key: :channel_id,
    class_name: "Message"
  
end
