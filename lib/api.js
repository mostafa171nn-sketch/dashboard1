const API_BASE = '/api';

export const api = {
  // Fetch all users
  async getUsers() {
    try {
      const response = await fetch(`${API_BASE}/users`);
      if (!response.ok) throw new Error('Failed to fetch users');
      return await response.json();
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },

  // Add new user
  async addUser(user) {
    try {
      const response = await fetch(`${API_BASE}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...user,
          status: 'Active',
        }),
      });
      if (!response.ok) throw new Error('Failed to add user');
      return await response.json();
    } catch (error) {
      console.error('Error adding user:', error);
      throw error;
    }
  },

  // Fetch sales data
  async getSales() {
    try {
      const response = await fetch(`${API_BASE}/sales`);
      if (!response.ok) throw new Error('Failed to fetch sales');
      return await response.json();
    } catch (error) {
      console.error('Error fetching sales:', error);
      throw error;
    }
  },

  // Fetch role statistics
  async getRoleStats() {
    try {
      const response = await fetch(`${API_BASE}/roleStats`);
      if (!response.ok) throw new Error('Failed to fetch role stats');
      return await response.json();
    } catch (error) {
      console.error('Error fetching role stats:', error);
      throw error;
    }
  },

  // Update user
  async updateUser(id, data) {
    try {
      const response = await fetch(`${API_BASE}/users/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to update user');
      return await response.json();
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  },

  // Delete user
  async deleteUser(id) {
    try {
      const response = await fetch(`${API_BASE}/users/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete user');
      return true;
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  },
};

export default api;

