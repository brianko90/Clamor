# user's completed friends
json.friends do
  @user.friends.each do  |friend|
    json.set! friend.id do
      json.extract! friend, :id, :username
    end
  end 
end


# user's outgoing requestse
json.outgoing do 
  @user.outgoing_requests.each do |request|
    json.set! request.id do 
      json.extract! request, :id, :username
    end
  end
end


# user's incoming requests
json.incoming do 
  @user.incoming_requests.each do |request|
    json.set! request.id do 
      json.extract! request, :id, :username
    end
  end
end