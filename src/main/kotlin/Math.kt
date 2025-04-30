package math

import kotlin.math.*

class Math {

    fun addInt(a: Int, b: Int): Int{
        return a+b
    }

    fun addFloat(a: Float, b: Float): Float{
        return a + b
    }

    fun addDouble(a: Double, b: Double): Double{
        return a + b
    }

    fun pythagor(sideA: Float, sideB: Float): Float {
        val hypotenuse = sideA.pow(2) + sideB.pow(2)

        return sqrt(hypotenuse)
    }

    fun pythagorCathetus(sideA: Float, hypotenuse: Float): Float{
        val sideB = hypotenuse.pow(2) - sideA.pow(2)

        return sqrt(sideB)
    }

    fun squareArea(side: Float): Float{
        return side.pow(2)
    }

    fun squarePerimeter(side: Float): Float{
        return side * 4
    }

    fun rectArea(sideA: Float, sideB: Float): Float{
        return sideA * sideB
    }

    fun rectPerimeter(sideA: Float, sideB: Float): Float{
        return (sideA + sideB) * 2
    }

    fun triangleArea(height: Float, base: Float): Float{

        val area = (0.5 * height * base).toFloat()

        return area
    }

    fun triangleArea(sideA: Float, sideB: Float, sideC: Float): Float{
        val perimeter = sideA + sideB + sideC
        val semiPerimeter = perimeter/2

        val area = sqrt(semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC))

        return area
    }

    fun trianglePerimeter(sideA: Float, sideB: Float, sideC: Float): Float{
        return sideA + sideB + sideC
    }

    fun triangleAngles(sideA: Float, sideB: Float, sideC: Float, showLogs: Boolean = true): Triple<Float, Float, Float>? {
        if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
            println("Error: The given side lengths do not form a valid triangle.")
            return null
        }

        val cosAlpha = (sideB.pow(2) + sideC.pow(2) - sideA.pow(2)) / (2 * sideB * sideC)
        val sinAlpha = sqrt(1 - cosAlpha.pow(2))
        val alphaRad = atan2(sinAlpha, cosAlpha)

        val cosBeta = (sideA.pow(2) + sideC.pow(2) - sideB.pow(2)) / (2 * sideA * sideC)
        val sinBeta = sqrt(1 - cosBeta.pow(2))
        val betaRad = atan2(sinBeta, cosBeta)

        val cosTheta = (sideA.pow(2) + sideB.pow(2) - sideC.pow(2)) / (2 * sideA * sideB)
        val sinTheta = sqrt(1 - cosTheta.pow(2))
        val thetaRad = atan2(sinTheta, cosTheta)

        val alphaDeg = alphaRad.toDegrees()
        val betaDeg = betaRad.toDegrees()
        val thetaDeg = thetaRad.toDegrees()

        if (showLogs){
            println("Angle opposite side a1: ${String.format("%.3f", alphaDeg)} degrees")
            println("Angle opposite side a2: ${String.format("%.3f", betaDeg)} degrees")
            println("Angle opposite side l: ${String.format("%.3f", thetaDeg)} degrees")

            val angleSum = alphaDeg + betaDeg + thetaDeg
            println("Sum of angles: ${String.format("%.3f", angleSum)} degrees")
        }

        return Triple(alphaDeg, betaDeg, thetaDeg)
    }

    fun circleArea(radius: Float): Float{
        return PI.toFloat() * (radius.pow(2))
    }

    fun circleLengthR(radius: Float): Float{
        return 2 * PI.toFloat() * radius
    }

    fun circleLengthD(diameter: Float): Float{
        return PI.toFloat() * diameter
    }

    fun cubeVolume(side: Float): Float{
        return side.pow(3)
    }

    fun cuboidVolume(length: Float, width: Float, height: Float): Float{
        return length * width * height
    }

    fun Float.toDegrees(): Float {
        return this * 180f / PI.toFloat()
    }

    fun Float.toRadians(): Float {
        return this * PI.toFloat() / 180f
    }
}