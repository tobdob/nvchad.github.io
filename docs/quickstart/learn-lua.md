---
id: learn-lua
title: Learn Lua 
---

## Print

```lua
print("Hi")
```

## Comments

```lua
-- comment
print("Hi") -- comment

--[[
 multi-line 
 comment
]]
```

## Variables

```lua
-- Different types

local x = 10 -- number
local name = "sid" -- string
local isAlive = true -- boolean
local a = nil --no value or invalid value
```

**Numbers**

```lua
local a = 1
local b = 2

print(a + b) -- 3
```

```lua
-- increment
local n = 1
n = n + 1
print(n) -- 2
```

**Strings**

```lua
-- Concatenate strings
local phrase = "I am"
local name = "Sid"
print(phrase .. " " .. name) -- I am Sid

--or
print("I am " .. "Sid")
```

**Boolean**

```lua
local isAlive = true
print(isAlive) -- true

isAlive = false
print(isAlive) -- false
```

**Comparison Operators**

- == equality
- < less than
- \> greater than
- <= less than or equal to
- \>= greater than or equal to
- ~= inequality

## Conditional Statements

```lua
-- Number comparisons
local age = 10

if age > 18 then
  print("over 18") -- this will not be executed
end

-- elseif and else
age = 20

if age > 18 then
  print("over 18")
elseif age == 18 then
  print("18 huh")
else
  print("kiddo")
end
```

```lua
-- Boolean comparison
local isAlive = true

if isAlive then
    print("Be grateful!")
end

-- String comparisons
local name = "sid"

if name ~= "sid" then
  print("not sid")
end
```

**Combining Statements**

```lua
local age = 22

if age == 10 and x > 0 then -- both should be true
  print("kiddo!")
elseif x == 18 or x > 18 then -- 1 or more are true
  print("over 18")
end

-- result: over 18
```

**Invert Value**

You can also invert a value with the **not** keyword:

```lua
local x = 18

if not x == 18 then
  print("kiddo!") -- prints nothing as x is 18
end
```

## Functions

```lua
local function print_num(a)
  print(a)
end

or

local print_num = function(a)
  print(a)
end

print_num(5) -- prints 5 
```

```lua
-- multiple parameters

function sum(a, b)
  return a + b
end
```

## Scope

Variables have different scopes. Once the end of the scope is reached, the values in that scope are no longer accessible.

```lua
function foo()
  local n = 10
end

print(n) -- nil , n isn't accessible outside foo()
```

## Loops

Different ways to make a loop:

### While 
```lua
local i = 1

while i <= 3 do
   print("hi")
   i = i + 1
end
```

### For
```
for i = 1, 3 do
   print("hi")
   i = i + 1
end
```
```
-- Both print "hi" 3 times
hi
hi
hi
```

## Tables

- Tables can be used to store complex data.
- Types of tables: 

### Arrays (lists)

- Items within these can be accessed by "index".

```lua
local colors = { "red", "green", "blue" }

print(colors[1]) -- red
print(colors[2]) -- green
print(colors[3]) -- blue

-- Different ways to loop through lists
-- #colors is the length of the table, #tablename is the syntax

for i = 1, #colors do
  print(colors[i])
end

-- ipairs 
for index, value in ipairs(colors) do
   print(colors[index])
   -- or
   print(value)
end

-- If you dont use index or value here then you can replace it with _ 
for _, value in ipairs(colors) do
   print(value)
end
```

### Dictionaries

- These contain keys and values:

```lua 
local info = { 
   name = "sid",
   age = 20,
   isAlive = true
}

-- both print sid
prrint(info["name"])
print(info.name)

-- Loop by pairs
for key, value in pairs(info) do
   print(key .. " " .. tostring(value))
end

-- prints name sid, age 20 etc
```

### **Nested Tables**

```lua
-- Nested lists
local data = {
    { "Sid", 20 },
    { "Tim", 90 },
}

for i = 1, #data do
  print(data[i][1] .. " is " .. data[i][2] .. " years old")
end

-- Nested dictionaries
local data = {
    sid = { age = 20 },
    time = { age = 90 },
}
```

## Modules

Import code from other files

```lua
require("path")
```

- Credits - [Lua-Beginners-Guide](https://github.com/pohka/Lua-Beginners-Guide)
- This tutorial is a modifed version of the above guide, shortened to teach basic Lua needed only to configure Neovim in general.
