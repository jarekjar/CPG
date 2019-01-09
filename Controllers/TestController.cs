using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CPG.Controllers
{
    public class TestController : ApiController
    {
        public IHttpActionResult GetTest()
        {
            return Ok("You've recieved the test data.");
        }
    }
}
