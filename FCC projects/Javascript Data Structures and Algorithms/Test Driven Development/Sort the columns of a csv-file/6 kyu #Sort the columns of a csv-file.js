// problem : #Sort the columns of a csv-file 6kyu

// You get a string with the content of a csv-file. The columns are separated by semicolons.
// The first line contains the names of the columns.
// Write a method that sorts the columns by the names of the columns alphabetically and incasesensitive.


// An example:

// Before sorting:
// As table (only visualization):
// |myjinxin2015|raulbc777|smile67|Dentzil|SteffenVogel_79|
// |17945       |10091    |10088  |3907   |10132          |
// |2           |12       |13     |48     |11             |

// The csv-file:

// myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n
// 17945;10091;10088;3907;10132\n
// 2;12;13;48;11

// ----------------------------------

// After sorting:
// As table (only visualization):
// |Dentzil|myjinxin2015|raulbc777|smile67|SteffenVogel_79|
// |3907   |17945       |10091    |10088  |10132          |
// |48     |2           |12       |13     |11             |

// The csv-file:
// Dentzil;myjinxin2015;raulbc777;smile67;SteffenVogel_79\n
// 3907;17945;10091;10088;10132\n
// 48;2;12;13;11

// There is no need for prechecks. You will always get a correct string with more than 1 line und more than 1 row. All columns will have different names.

// steps 




function sortCsvColumns(csvFileContent) {

    let rows = csvFileContent.split(/\n/g)
    let numberOfColumns = rows[0].split(";").length
    let numberOfRows = rows.length
    let ArrayOfRows = rows.map(items =>
        items.split(";")
    )
    let arrayOfColumns = []
    for (let i = 0; i < numberOfColumns; i++) {
        let groupsOfItems = []
        for (let j = 0; j < numberOfRows; j++) {
            groupsOfItems.push(ArrayOfRows[j][i])
        }
        arrayOfColumns.push(groupsOfItems)
    }

    return arrayOfColumns.sort((a, b) => {
        return a[0].toLowerCase() - b[0].toLowerCase()
    })
}


module.exports = sortCsvColumns