function solution() {
    const tables = document.getElementsByTagName("table");
    const howLong = Array.from(tables).map(
        (table) => table.getElementsByTagName("td").length
    );
    return Math.max(...howLong);
}
