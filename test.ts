// tests go here; this will not be compiled when this package is used as an extension.
hoverbit.forward_power_simple(50)
basic.pause(1000)
hoverbit.stop_all_motors()
hoverbit.direction_simple(-20)
basic.pause(1000)
hoverbit.direction_simple(20)
basic.pause(1000)
hoverbit.direction_simple(0)
hoverbit.start_cushion_simple()
basic.pause(1000)
hoverbit.stop_cushion()
basic.pause(1000)
hoverbit.cushion_power(10)
basic.pause(1000)
hoverbit.stop_all_motors()
hoverbit.servo_angle(-20, list_servo.S1)
basic.pause(1000)
hoverbit.servo_angle(20, list_servo.S1)
basic.pause(1000)
hoverbit.servo_angle(0, list_servo.S1)
hoverbit.motor_power(list_motor.M0, 0)
basic.pause(1000)
hoverbit.motor_power(list_motor.M0, 50)
basic.pause(1000)
hoverbit.stop_all_motors()