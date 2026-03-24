import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"



// Contador animado desde 0 hasta un número específico "value"

const Counter = ({ value, isRating = false }) => {

  const count = useMotionValue(0);                                       // Estado del value que no recarga la página
  const rounded = useTransform(count, (latest) => Math.round(latest));   // Redondea el valor
  const notRounded = useTransform(count, (latest) => latest.toFixed(1)); // Redondea el valor con decimales
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });                         // Detecta si el elemento (ref) está en el viewport

  useEffect(() => {
    if (inView) {                                                        // Si el elemento está en el viewport
      animate(count, value, {                                            // Anima el contador desde 0 hasta "value"
        duration: isRating ? 2.5 : 4,                                    // Duración de la animación
        ease: "easeOut"                                                  // Tipo de animación
      })
    }
  }, [count, value, inView])

  return (
    <motion.span ref={ref} className="space-font">
      {isRating ? notRounded : rounded}
    </motion.span>
  )
}

export default Counter