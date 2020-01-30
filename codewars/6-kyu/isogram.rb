# def isogram?(s)
#   return false if s.nil? or s.to_s.length == 1
#   chars = s.split('')
#   hash = Hash.new
#   chars.each do |c|
#     if c =~ /[a-zA-Z]/

#       # if hash.has_key?(c)
#       #   hash[c]++
#       # # else
#       # #   hash[c] = 0
#       # end
#     end
#   end
# end

def isogram?(s)
  return false if s.nil? or s.to_s.length == 1
  chars = s.split('')
  hash = Hash.new
  chars.each do |c|
    `c = c.downcase`
    if c =~ /[a-z]/
      if hash.has_key?(c)
        hash[c] += 1
      else
        hash[c] = 0
      end
    end
  end
  values = hash.values
  puts hash
  puts values
  return values.all? { |num| num == values[0]}
end

puts isogram?('lvlOXvXvEelmOemEEmOelvmXeEOXElmXevO')