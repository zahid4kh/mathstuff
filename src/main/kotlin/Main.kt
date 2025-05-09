package math

import math.twoD.rectangle.isGoldenRect
import math.twoD.rectangle.makeRectGolden

fun main(){
    println(isGoldenRect(2f, 3f)) // false

    println(makeRectGolden(2f, isShorterSide = true)) //3.236068

    println(isGoldenRect(2f, 3.23f)) // true
}