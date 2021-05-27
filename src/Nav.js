import React, { useEffect, useState } from "react";
import "./Nav.css"

function Nav(){

    const [show , handleShow] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll" , () => {
          if(window.scrollY>100){
             handleShow(true);
          }else handleShow(false);
      });
      return () => {
         window.removeEventListener("scroll");
      };
    } , [] )

    return (
        <div className={`nav ${show && "nav__black"}`} >
           <img 
              className="nav__logo"
              src="data:image/png;base64,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"
              alt ="Netflix logo"
           />
<img 
              className="nav__avatar"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEUNfoD///8Ae30AeHoAdXcAdnl6q6z2+/vo8vLx+Ph1sbIAdHfu9PQHfH8AgYPl8vI7kJKRvr+hx8jO4+PJ3d4eioxppqja6eni7OxdoqRSnqC42dqXxsaw09Ntra8ph4l/uLmGtrdapqeozc02lZdMmZuuzM3A2NnU4+SRvL2fy8xSmZpEkZO+1NV1qaqNxlfBAAAEIElEQVR4nO3bXXeiOhQGYNgJg6AiiIiggtbP0U7//8+beJzjoCYtSAQ7630uetVmvZuEEOnWMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvjNi3Ii8rkWtpuiLGCyKxA/dOchIZ3FPmGc5tVckGf4iPMUIA9/QGYNoEZr/c4Y+0zh2FSydX2KY00RfDDJ2ZlEnbadEa+EUYziBrlkkPzav2W4rJc5vYphzTQPTbYGixBZmkc/uYphDPTG29yObHb/p7YYSSQxzqSEGJbZs6FX9kavJQ1mMQV6/RDaVjWzaDU8i/ZDGMBf116knH1nH0FUoLrQ5qR2D3hQVhl0dwUvjihh2VHctsZVqaC3By6K1IoaZ1a2Qj5QXr68leznKpWQu6y5Tfv8wbKXC7HkV7hQjN1xh+rQKmeQkca6w0acFRaoKa9+HyosXci3Ry7Kk5w4de6lhKCps+nl4d+w+q/88VD0uHA3HpSpoLJ/ErH6FdHRkIw+b3GdOPOljK841DE2yvWaiYflXjLGWTKLtaolB9w8Me938uxq+uC8x0LMZUHRboqNh9T+QY3lb4ErXrUL92dXli6N23tPwt04xRsfV+MCi5O+Hl8Gy4W20EMMvXOrhRut1Jsrd+WQy2c82Wt9TVo7hpatY5FhlhvbXtsQsLmh/11w9x0vEAAAAAAAAAAAAAAAAgH8KMc/4l/8HRXyz3e2GLf07uqD/nO+fkLHZ2eeWgnZnkVi0ifSvJOLJpUXKTtoskfxdp9fZb7TWSETprtA50XCD3RWW/Qky19dUQCx3b7r2PV1jV+dd+sU6M88iDc0v1I2Cu5bextuzLqyrdrGgdhOHmL6xrGM/0hP3EfurIM42YY/fkMRYOpR2ZDvt3Yfe/iaLPVn4j7TBiL0l9xexooe24UbXIkvWL7n7uSGryh1JjEfjofQrQefV/7T8X2OuNFIvnq3FmisxlyR+zYoWo4Fi9oRB1kAhapbyytvT4OM9OpUpr1PUZhnR8SOYqosT4sxq99AmHvifxBuEo2G2iXiXc1bEeddYp8vtaN/55K9P9bntH0qJZV+kFHrh9HAI3P8sDodVqL7nCuzwrc0Wwr9YFEjbxGuy5+MWv1F+jcgPPr2XHtAL3l9j/v4Qny+CUguvHGfnvt7n3r44LSu+IFnVIDgarW8vUsSjmepQUnr24iB65dZZYt54NXi8vtEw9V64vDOx/fmHuPre6vSmWa6/r/s5xDls7W7D8lU64fZn6vFvUt4ZMcrfk2D69VnAmQbj95xefm3KiHMn73prN/g1CuO441zm1HacQRyHo19Btva6vMz5/JWd6jQ83z8mx48fZ8kx2fi5R9++tiKiPl1rOxEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALy43/ipMgzSotaqAAAAAElFTkSuQmCC"
              alt="Netflix Logo"
           />


        </div>
    )
}

export default Nav;