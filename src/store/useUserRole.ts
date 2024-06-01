/** @format */

import { create } from 'zustand';

interface UserRolesType {
	role: string;
	setRole: (value: string) => void;
}

export const useUserRoles = create<UserRolesType>((set) => {
	// Check for access token in local storage
	const accessToken = localStorage.getItem('accessToken');
	const initialRole = accessToken ? 'user' : 'guest';

	return {
		role: initialRole,
		setRole: (value: string) => set({ role: value })
	};
});

// Usage example:
// const { role, setRole } = useUserRoles();
// setRole("guest");
