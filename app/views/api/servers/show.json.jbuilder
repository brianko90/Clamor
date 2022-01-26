json.server do
  json.extract! @server, :id, :name, :public, :owner_id
end 

# Then format channels for use 