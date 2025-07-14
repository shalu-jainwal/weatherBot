import React from "react";

export default function UserTable({ users, toggleBlockUser, deleteUser }) {
  return (
    <section>
      <h2 className="text-xl font-medium text-gray-700 mb-4">
        User Management
      </h2>
      <div className="overflow-x-auto border border-gray-200 rounded-md shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3 text-left">Chat ID</th>
              <th className="px-4 py-3 text-center">Subscribed</th>
              <th className="px-4 py-3 text-center">Blocked</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {users.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-6 text-gray-500 italic"
                >
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user._id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3">{user.chatId}</td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        user.subscribed
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {user.subscribed ? "Yes" : "No"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        user.blocked
                          ? "bg-red-100 text-red-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {user.blocked ? "Yes" : "No"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center space-x-3">
                    <button
                      onClick={() => toggleBlockUser(user)}
                      className={`px-4 py-1 rounded-md text-white text-sm font-semibold transition ${
                        user.blocked
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-yellow-500 hover:bg-yellow-600"
                      }`}
                    >
                      {user.blocked ? "Unblock" : "Block"}
                    </button>
                    <button
                      onClick={() => deleteUser(user)}
                      className="px-4 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm font-semibold transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
