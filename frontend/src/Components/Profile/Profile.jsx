const Profile = () => {
    return ( 
        <section className="bg-gray-200">
      <div className="container mx-auto py-5">
        <div className="flex">
          {/* Profile Section */}
          <div className="w-1/3 mr-4 rounded-lg">
            <div className="mb-4 shadow-lg p-4 bg-white">
              <div className="text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle w-32 mb-2 mx-auto"
                />
                <p className="text-xl font-bold mb-1">Anuranga Madushan</p>
                <div className="flex justify-center">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
                </div>
              </div>
            </div>
          </div>

          {/* Information Section */}
          <div className="w-2/3">
            <div className="mb-4 shadow-lg p-4 bg-white">
              <div className="flex mb-4">
                <div className="w-1/4">
                  <p className="font-bold">Full Name</p>
                </div>
                <div className="w-3/4">
                  <p className="text-muted">Johnatan Smith</p>
                </div>
              </div>
              <hr className="my-2" />

              {/* Repeat this structure for other information sections */}
              <div className="flex mb-4">
                <div className="w-1/4">
                  <p className="font-bold">Email</p>
                </div>
                <div className="w-3/4">
                  <p className="text-muted">example@example.com</p>
                </div>
              </div>
              <hr className="my-2" />

              <div className="flex mb-4">
                <div className="w-1/4">
                  <p className="font-bold">Phone</p>
                </div>
                <div className="w-3/4">
                  <p className="text-muted">(097) 234-5678</p>
                </div>
              </div>
              <hr className="my-2" />

              <div className="flex mb-4">
                <div className="w-1/4">
                  <p className="font-bold">Mobile</p>
                </div>
                <div className="w-3/4">
                  <p className="text-muted">(098) 765-4321</p>
                </div>
              </div>
              <hr className="my-2" />

              <div className="flex">
                <div className="w-1/4">
                  <p className="font-bold">Address</p>
                </div>
                <div className="w-3/4">
                  <p className="text-muted">Bay Area, San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Previous Trip Information Section */}
        <div className="mb-4 shadow-lg mt-4 p-4 bg-gray-300 rounded">
          <div className="w-full">
            <div className="mb-4 shadow-lg p-4 bg-white">
              <h5 className="text-xl font-bold">Previous Trip Information</h5>
            </div>
          </div>

          {/* Repeat this structure for each trip */}
          <div className="w-full">
            {/* <Link to="./Tripinfo"> */}
            <div className="mb-4 shadow-lg p-4 bg-white rounded-lg" >
              <h6 className="text-lg font-bold">Trip 1</h6>
            </div>
            {/* </Link> */}
          </div>

          <div className="w-full">
            <div className="mb-4 shadow-lg p-4 bg-white rounded-lg">
              <h6 className="text-lg font-bold">Trip 2</h6>
            </div>
          </div>
        </div>
      </div>
    </section>

     );
}
 
export default Profile;