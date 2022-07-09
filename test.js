var str = "вишня, груша, слива, груша";

function delete_first_occurrence(str, subst) {
    return str.replace(subst,'hui')
};

console.log (delete_first_occurrence(str, 'груша')); // 'вишня, слива, груша'