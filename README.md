---
topics: General
blog: https://bitsits.games/2011/06/rubiks-cube-solver.html
---
![](rubiks%20cube%20solver%20-%20small.PNG)

# Rubik's Cube Solver

Okay, its done. This Rubik's Cube solver uses [Korf's Algorithm][korf] also called [IDA*][ida]. 
The solver have two views 3D and flat. 
The implementation is similar to [Jaap Scherphuis' Cubie][cubie], solving the cube with a maximum depth of 25. 
The cube can be scrambled and solved but its not configurable. 
The 3D cube is drawn using OpenGL. 

![](rubiks%20cube%20solver.PNG)

Download: [RubiksCube.zip][zip] (253 KB)

[korf]: http://en.wikipedia.org/wiki/Optimal_solutions_for_Rubik%27s_Cube#Korf.27s_Algorithm
[ida]: http://en.wikipedia.org/wiki/IDA*
[cubie]: http://www.jaapsch.net/puzzles/cubie.htm
[zip]: https://github.com/suvozit/RubiksCube-Assets/raw/master/RubiksCube.zip
