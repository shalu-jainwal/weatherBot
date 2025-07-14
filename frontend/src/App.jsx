import React, { useEffect, useState } from "react";
import axios from "axios";
import ApiKeyInput from "./components/ApiKeyInput";
import UserTable from "./components/UserTable";
import Modal from "./components/Modal";

const API_BASE = "http://localhost:5000/api";

function App() {
  const [users, setUsers] = useState([]);
  const [weatherApiKey, setWeatherApiKey] = useState("");
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  useEffect(() => {
    fetchUsers();
    fetchSettings();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${API_BASE}/users`);
      setUsers(res.data);
    } catch (error) {
      console.error("Failed to fetch users", error);
    }
  };

  const fetchSettings = async () => {
    try {
      const res = await axios.get(`${API_BASE}/settings`);
      setWeatherApiKey(res.data.weatherApiKey);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch settings", error);
      setLoading(false);
    }
  };

  const toggleBlockUser = async (user) => {
    try {
      await axios.put(`${API_BASE}/users/${user._id}/block`, {
        block: !user.blocked,
      });
      fetchUsers();
    } catch (error) {
      console.error("Failed to update user block status", error);
    }
  };

  const confirmDeleteUser = (user) => {
    setUserToDelete(user);
    setModalOpen(true);
  };

  const handleDeleteConfirmed = async () => {
    try {
      await axios.delete(`${API_BASE}/users/${userToDelete._id}`);
      fetchUsers();
      setModalOpen(false);
      setUserToDelete(null);
    } catch (error) {
      console.error("Failed to delete user", error);
      setModalOpen(false);
      setUserToDelete(null);
    }
  };

  const updateApiKey = async () => {
    try {
      await axios.put(`${API_BASE}/settings`, { weatherApiKey });
      alert("✅ API Key updated successfully!");
    } catch (error) {
      console.error("Failed to update API key", error);
      alert("❌ Failed to update API key");
    }
  };

  if (loading)
    return (
      <div className="text-center text-lg mt-10 text-gray-600">Loading...</div>
    );

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-10">
          🌤️ Weather Bot Admin Panel
        </h1>

        <ApiKeyInput
          weatherApiKey={weatherApiKey}
          setWeatherApiKey={setWeatherApiKey}
          updateApiKey={updateApiKey}
        />

        <UserTable
          users={users}
          toggleBlockUser={toggleBlockUser}
          deleteUser={confirmDeleteUser}
        />

        <p className="text-center text-xs text-gray-400 mt-12 select-none">
          ℹ️ Users can use
          <code className="bg-gray-200 px-1 rounded">/start</code> and
          <code className="bg-gray-200 px-1 rounded">/stop</code> in the
          Telegram bot to subscribe/unsubscribe
        </p>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleDeleteConfirmed}
        title="Confirm Delete"
      >
        Are you sure you want to delete user with Chat ID{" "}
        <strong>{userToDelete?.chatId}</strong>?
      </Modal>
    </div>
  );
}

export default App;
