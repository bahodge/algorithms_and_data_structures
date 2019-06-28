def sort(old_array)
    return if old_array.empty?
    do_sort(old_array)
end

def do_sort(old_array)
    swapped = false
    old_array.each_with_index do |item, idx|
        tmp = old_array[idx + 1]
        break unless tmp
        if item > tmp
            old_array[idx] = tmp
            old_array[idx + 1] = item
            swapped = true
        end
    end

    swapped ? do_sort(old_array) : old_array
end


array_1 = [1, 60, 3, 35, 20];
array_2 = [2, 32, 6, 35, 29, 16, 78, 332, 325, 122, 5, 56, 6, 15, 267]
p sort(array_1)
p sort(array_2)