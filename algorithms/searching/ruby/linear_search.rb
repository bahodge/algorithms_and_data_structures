def search(array, item)
    array.each_with_index { |element, idx| return idx if element == item}
    return -1
end

array_1 = (0..20).to_a
array_2 = (0..1_000_000).to_a

p search(array_1, 3)
p search(array_1, 22)
p search(array_2, 15832)

