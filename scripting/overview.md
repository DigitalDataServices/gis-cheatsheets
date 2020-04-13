# Scripting

## Contents
  - [ArcGIS Scripting Quick Reference](#arcgis-scripting-quick-reference)
    - [Math Operators](#arcgis-scripting-math-operators)
    - [String Operators](#arcgis-scripting-string-operators)
    - [Comparison Operators](#arcgis-scripting-comparison-operators)
    - [Logical Operators](#arcgis-scripting-logical-operators)
    - [Data Type Conversion Functions](#arcgis-scripting-data-type-conversion-functions)
    - [Mathematical Functions](#arcgis-scripting-mathematical-functions)
    - [String Functions](#arcgis-scripting-string-functions)
    - [Date Functions](#arcgis-scripting-date-functions)

## ArcGIS Scripting Quick Reference

#### ArcGIS Scripting Math Operators

| Operator | Description | Arcade | Python | VBScript | 
| --- | --- | :---: | :---: | :---: | 
| Integer Division | Returns the integer of `x` divided by `y` | `Floor(x / y)` | `x // y` | `x \ y` |
| Modulus | Returns the remainder of `x` divided by `y` | `x % y` | `x % y` | `x mod y` |
| Exponent | Returns the values `x` raised to the power of `y` | `x ** y` | `x ** y` | `x ^ y` |

<div align="right">Table of Contents: <a href="#contents">Section</a> | <a href="../README.md#table-of-contents">Main</a></div>

#### ArcGIS Scripting String Operators

| Operator | Description | Arcade | Python | VBScript | 
| --- | --- | :---: | :---: | :---: | 
| Concatenation | Concatenates string `a` with string `b` | `a + b` | `a + b` | `a & b` |
| CR/LF | Adds a carriage return and line feed to a string | `\n` | `\r\n` | `vbCRLF` |
| Line Feed | Adds a line feed to a string | `\n` | `\n` | `vbNewLine` |

<div align="right">Table of Contents: <a href="#contents">Section</a> | <a href="../README.md#table-of-contents">Main</a></div>

#### ArcGIS Scripting Comparison Operators

| Operator | Description | Arcade | Python | VBScript | 
| --- | --- | :---: | :---: | :---: | 
| Equal to | If `x` is equal to `y` returns `true` else `false` | `x == y` | `x == y` | `x = y` | 
| Not Equal to | If `x` is not equal to `y` returns `true` else `false` | `x != y` | `x != y` | `x <> y` |
| Greater than | If `x` is greater than `y` returns `true` else `false` | `x > y` | `x > y` | `x > y` | 
| Less than | If `x` is less than `y` returns `true` else `false` | `x > y` | `x > y` | `x > y` | 
| Greater than or equal to | If `x` is greater than or equal to `y` returns `true` else `false` | `x > y` | `x > y` | `x > y` | 
| Less than or equal to | If `x` is less than or equal to `y` returns `true` else `false` | `x > y` | `x > y` | `x > y` | 

<div align="right">Table of Contents: <a href="#contents">Section</a> | <a href="../README.md#table-of-contents">Main</a></div>

#### ArcGIS Scripting Logical Operators

| Operator | Description | Arcade | Python | VBScript | 
| --- | --- | :---: | :---: | :---: | 
| or | Returns `true` if one of the two values returns `true` | <code>a &#124;&#124; b</code> | `a or b` | `a Or b` |
| and | Returns `true` if both given values return `true` | `a && b` | `a and b` | `a And b` |
| not | Returns `true` the values do not return `true` | <code>a &#124; b</code> | `a not b` | `a Not b` |

<div align="right">Table of Contents: <a href="#contents">Section</a> | <a href="../README.md#table-of-contents">Main</a></div>

#### ArcGIS Scripting Data Type Conversion Functions

| Data Type | Description | Arcade | Python | VBScript | 
| --- | --- | :---: | :---: | :---: | 
| Date | Returns a `date` data type | `Date()` | `datetime.strptime()` | `CDate()` |
| Double | Returns a `double` data type | `Number()` | `float()` | `CDbl()` |
| Integer | Returns an `integer` data type | `Number()` | `int()` | `CInt()` |
| String | Returns a `string` data type | `Text()` | `str()` | `CStr()` |

<div align="right">Table of Contents: <a href="#contents">Section</a> | <a href="../README.md#table-of-contents">Main</a></div>

#### ArcGIS Scripting Mathematical Functions

| Function | Description | Arcade | Python | VBScript | 
| --- | --- | :---: | :---: | :---: | 
| Absolute | Returns the absolute value of a given value (`n`) | `Abs(n)` | `abs(n)` | `Abs(n)` |
| Average | Returns the average of an array of numbers (`[n]`) | `Average([n])` | `sum([n])/len([n])` | - |
| Ceiling | Returns the value (`n`) rounded up to the nearest integer | `Ceil(n)` | `math.ceil(n)` | `Int(n) + 1` |
| Constrain | Constrains value (`x`) to minimum (`i`) and maximum (`j`) bounds | `Constrain(x,i,j)` | `min(j,max(i, x)` | - |
| Exponent | Returns the base of a natural logarithm raised to a power (`x`) | `Exp(x)` | `math.exp(x)` | `Exp(x)` | 
| Floor | Returns the value (`n`) rounded down to the nearest integer | `Floor(n)` | `math.floor(n)` | `Int(n)` |
| Maximum | Returns the highest value from an array of numbers (`[n]`) | `Max([n])` | `max([n])` | - |
| Mean | Returns the mean value of an array of numbers (`[n]`) | `Mean([n])` | `statistics.mean([n])` | - |
| Minimum | Returns the lowest value from an array of numbers (`[n]`) | `Max([n])` | `max([n])` | - |
| Random | Returns a random number | `Random()` | `random.random()` | `Rnd` |
| Round | Returns the value (`n`) rounded to a given decimal place (`i`) | `Round(n,i)` | `round(n,i)` | `Round(n,i)` |
| Square Root | Returns the square root of a number (`n`) | `Sqrt(n)` | `math.sqrt(n)` | `Sqr(n)` |
| Sum | Returns the sum of an array of numbers (`[n]`) | `Sum([n])` | `sum([n])` | - |

<div align="right">Table of Contents: <a href="#contents">Section</a> | <a href="../README.md#table-of-contents">Main</a></div>

#### ArcGIS Scripting String Functions

| Function | Description | Arcade | Python | VBScript | 
| --- | --- | :---: | :---: | :---: | 
| Concatenate | Concatenates an array of strings together | `Concatenate()` | `.join()` | `&` |
| Find | Find position of a string (`a`) in string (`b`) | `Find(a, b)` | `b.find(a)` | `InStr(b, a)` |
| Left | Return (`n`) characters from the beginning of a string (`a`) | `Left(a, n)` | `a[:n]` | `Left(a, n)` |
| Length | Returns the character length of a string (`a`) | `Count(a)` | `len(a)` | `Len(a)` |
| Lowercase | Converts text (`a`) to all lower case characters | `Lower(a)` | `a.lower()` | `LCase(a)` |
| Mid | Returns (`j`) characters from string (`a`) starting a position (`i`) | `Mid(a, i, j)` | `a[i:i+j]` | `Mid(a, i, j)` |
| Replace | Replace string (`a`) with string (`b`) within string (`x`) | `Replace(x, a, b)` | `x.replace(a, b)` | `Replace(x, a, b)` |
| Right | Return (`n`) characters from the end of a string (`a`) | `Right(a, n)` | `a[-n:]` | `Right(a, n)` |
| Split | Splits text (`a`) into an array on separator (`x`) | `Split(x, a)` | `x.split(a)` | `Split(x, a)` |
| Titlecase | Converts text (`a`) to title or proper case | `Proper(a)` | `a.title()` | - |
| Trim | Removes spaces from the beginning and end of a string (`a`) | `Trim(a)` | `a.strip()` | `Trim(a)` |
| Uppercase | Converts text (`a`) to upper case characters | `Upper(a)` | `a.upper()` | `UCase(a)` |

<div align="right">Table of Contents: <a href="#contents">Section</a> | <a href="../README.md#table-of-contents">Main</a></div>

#### ArcGIS Scripting Date Functions

| Function | Description | Arcade | Python | VBScript | 
| --- | --- | :---: | :---: | :---: | 
| Date Addition | Adds value (`v`) in units (`u`) to the date (`d`) | `DateAdd(d, v, u)` | `d + timedelta(v=u)` | `DateAdd(v, u, d)` |
| Date Difference | Returns the intervals (`i`) between dates `d1` & `d2` | `DateDiff(d1, d2, i)` | - | `DateDiff(i, d1, d2)` |
| Now | Returns the current date and time in local time | `Now()` | `datetime.now()` | `Now()` |
| Timestamp | Returns the current date and time in UTC time | `Timestamp()` | `datetime.utcnow()` | - |
| Today | Returns the current date in local time | `Today()` | `datetime.today()` | `Date()` |

<div align="right">Table of Contents: <a href="#contents">Section</a> | <a href="../README.md#table-of-contents">Main</a></div>