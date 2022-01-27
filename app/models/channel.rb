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
  belongs_to :server 
  
end
