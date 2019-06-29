def sort(array)
  sorted_array = []
  # populate the array with the first item
  sorted_array << array.shift
  # loop over the unordered array
  array.each do |item|
    idx = 0
    # stay on this unordered item until the end of the sorted array
    while idx < sorted_array.length
      # if item is lte then insert at that point
      if item <= sorted_array[idx]
        # finds a the place where the item should go
        sorted_array.insert(idx, item)
        break # next item to go through loop
      elsif idx == sorted_array.length - 1
        # reached the last item in the sorted array
        sorted_array << item
        break # next item to go through loop
      end
      # didnt find match in the sorted array, go to sorted item
      idx += 1
    end
  end
  sorted_array
end

array_1 = (0..10).map {|x| rand(0..100)}
array_2 = (0..15).map {|x| rand(0..100)}
array_3 = [1, 60, 3, 35, 20];
array_4 = [2, 32, 6, 35, 29, 16, 78, 332, 325, 122, 5, 56, 6, 15, 267]

p sort(array_1)
p sort(array_2)
p sort(array_3)
p sort(array_4)

